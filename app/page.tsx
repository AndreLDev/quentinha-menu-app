'use client'

import React, { useState } from 'react';
import Cards from "@/components/Cards";
import { Select, SelectItem } from "@nextui-org/react";
import { Menus } from '../public/data';

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("");

  function menuChange(title: string) {
    setSelectedMenu(title);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 w-3/5 rounded-md text-center">
        <h1 className="text-4xl font-bold mb-4">Quentinhas do Grau</h1>
        <Select
          label="Menus Disponíveis"
          placeholder="Selecione um Menu"
          className="max-w-xs"
          onChange={(e) => menuChange(e.target.value)}
        >
          {Menus.map((Menu) => (
            <SelectItem key={Menu.title} value={Menu.title}>
              {Menu.title}
            </SelectItem>
          ))}
        </Select>
        
        <div className="mx-auto">
        <br/>
          <Cards title={selectedMenu} />
        </div>
      </div>
    </div>
  );
}

