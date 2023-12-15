import React from 'react'
import {motion} from "framer-motion"
import "./Team.css"


const Team = () => {
  return (
    <section className="pt-[100px] pb-[100px]">
      <h1 className=" p-10 text-3xl  text-center">Our Team</h1>
      <hr className="mb-10" />
      {/* text-black text-3xl font-bol w-full */}
      <div className="employee  h-3/4 w-full text-center ">
        <div className="emp-img  border  ">
          <img className="h-1/6" src="/emp.png" alt="emp1" />
          <h2 className="text-center font-bold pt-1 ">Employee name</h2>
        </div>
        <div className="emp-text border text-gray-700  ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores tempora quas quibusdam earum consequuntur ipsa neque
            ratione ad, eligendi, esse numquam pariatur vel error similique
            doloremque commodi ex non in? A magni necessitatibus iure dicta,
            odit natus, doloribus assumenda explicabo repellat repellendus eius.
            Deleniti nam magnam, aspernatur voluptatibus provident veritatis
            quaerat error voluptatum, dolores id quis explicabo architecto
            similique!
          </p>
        </div>
      </div>
      <div className="employee  h-2/4 w-full text-center ">
        <div className="emp-text ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores tempora quas quibusdam earum consequuntur ipsa neque
            ratione ad, eligendi, esse numquam pariatur vel error similique
            doloremque commodi ex non in? A magni necessitatibus iure dicta,
            odit natus, doloribus assumenda explicabo repellat repellendus eius.
            Deleniti nam magnam, aspernatur voluptatibus provident veritatis
            quaerat error voluptatum, dolores id quis explicabo architecto
            similique!
          </p>
        </div>
        <div className="emp-img h-[100%]   ">
          Employee 1
          <img src="/emp.png" alt="emp1" />
        </div>
      </div>
      <div className="employee  h-2/4 w-full text-center ">
        <div className="emp-img h-[100%]   ">
          Employee 1
          <img src="/emp.png" alt="emp1" />
        </div>
        <div className="emp-text ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores tempora quas quibusdam earum consequuntur ipsa neque
            ratione ad, eligendi, esse numquam pariatur vel error similique
            doloremque commodi ex non in? A magni necessitatibus iure dicta,
            odit natus, doloribus assumenda explicabo repellat repellendus eius.
            Deleniti nam magnam, aspernatur voluptatibus provident veritatis
            quaerat error voluptatum, dolores id quis explicabo architecto
            similique!
          </p>
        </div>
      </div>
      <div className="employee  h-2/4 w-full text-center ">
        <div className="emp-text ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores tempora quas quibusdam earum consequuntur ipsa neque
            ratione ad, eligendi, esse numquam pariatur vel error similique
            doloremque commodi ex non in? A magni necessitatibus iure dicta,
            odit natus, doloribus assumenda explicabo repellat repellendus eius.
            Deleniti nam magnam, aspernatur voluptatibus provident veritatis
            quaerat error voluptatum, dolores id quis explicabo architecto
            similique!
          </p>
        </div>
        <div className="emp-img h-[100%]   ">
          Employee 1
          <img src="/emp.png" alt="emp1" />
        </div>
      </div>
    </section>
  );
}

export default Team
