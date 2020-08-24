import React from "react";
import Item from "./Item";
import Spinner from "../Spinner";

const Grid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium uppercase title-font mb-4 text-white">
            Characters
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <Item item={item} key={item.char_id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
