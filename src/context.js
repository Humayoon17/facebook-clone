import React, { createContext, useEffect, useState } from 'react';

import data from './data/data';

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatedData = (items) => {
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
  };

  // getting single room by using id
  const getRoom = (roomId) => {
    let tempRooms = [...rooms];

    // getting the specified room
    let choicedRoom = tempRooms.find((room) => room.id === roomId);

    return choicedRoom;
  };

  useEffect(() => {
    // assigning all formated Items
    const rooms = formatedData(data);

    // getting those rooms which thair featured properties is true
    let featuredRooms = rooms.filter((room) => room.featured === true);

    // assigning featured rooms into featuredRoom state
    setFeaturedRooms(featuredRooms);

    // assigning all rooms
    setRooms(rooms);

    // assiging all sorted rooms
    setSortedRooms(rooms);

    // making loading  false
    setIsLoading(false);
  }, []);
  // rooms, sortedRooms, featuredRooms, isLoading
  return (
    <RoomContext.Provider
      value={{ rooms, sortedRooms, featuredRooms, isLoading, getRoom: getRoom }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
