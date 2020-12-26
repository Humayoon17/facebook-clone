import React, { createContext } from 'react';

import data from './data/data';

const RoomContext = createContext();

class RoomProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      isLoading: true,
      type: 'all',
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
    };

    this.getRoom = this.getRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // getting the max price of the rooms from the data
  getMaxPrice(rooms) {
    return Math.max(...rooms.map((room) => room.price));
  }

  // getting max size of the rooms from the data
  getMaxSize(rooms) {
    return Math.max(...rooms.map((room) => room.size));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  }

  filterRooms() {
    let {
      rooms,
      type,
      capacity,
      price,
      maxSize,
      minSize,
      breakfast,
      pets,
    } = this.state;
    let tempRooms = [...rooms];

    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by max & min price
    price = parseInt(price);
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    // change state
    this.setState({
      sortedRooms: tempRooms,
    });
  }

  formatedData(items) {
    let tempItems = items.map((item) => {
      // getting all items id
      let id = item.sys.id;

      // getting all images url
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });

      // getting rooms properties
      let room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  }

  // getting single room by using id
  getRoom(roomId) {
    let tempRooms = [...this.state.rooms];
    // getting the specified room
    let choicedRoom = tempRooms.find((room) => room.id === roomId);
    return choicedRoom;
  }

  componentDidMount() {
    // assigning all formated Items
    const rooms = this.formatedData(data);

    // getting those rooms which thair featured properties is true
    let featuredRooms = rooms.filter((room) => room.featured === true);

    let maxSize = this.getMaxSize(rooms);
    let maxPrice = this.getMaxPrice(rooms);

    // assigning featured rooms into featuredRoom state
    this.setState({
      rooms,
      handleChange: this.handleChange,
      featuredRooms,
      sortedRooms: rooms,
      isLoading: false,
      price: maxPrice,
      maxSize: maxSize,
      maxPrice: maxPrice,
    });
  }
  // rooms, sortedRooms, featuredRooms, isLoading
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withHigherComponentRoomConsumer(Component) {
  return function RoomConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
