import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="m-10">
      <h1 className="text-center  mb-100 text-3xl p-10 ">About Us</h1>
      <hr />
      <p className="text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        laboriosam est non pariatur, quas ex, rerum velit officiis porro
        doloribus, suscipit possimus voluptas reprehenderit aliquam
        exercitationem deleniti minus ea at accusamus! Tempore corporis ex
        cumque dolor doloremque repellat obcaecati excepturi, sunt saepe! Velit
        totam nam mollitia saepe repellendus laboriosam sapiente harum
        repudiandae explicabo. Error hic inventore, saepe dolorum sunt culpa
        quam, nisi quaerat repudiandae maxime vitae labore voluptatem harum
        fugit exercitationem iusto. Vero ipsum, deleniti veniam rerum omnis
        cupiditate! Ducimus, dolorem iste ea minus neque eum? Ab, deleniti eum
        deserunt quae omnis maxime, alias illo nam distinctio quam fuga est
        libero unde ea dolor nostrum corrupti ipsa. Temporibus repellat
        consectetur non iure quo eligendi numquam, officiis ex omnis assumenda
        laborum accusantium nulla, alias a. Vero illum repellat fugit cum,
        tempora eum sit modi sequi iure voluptates iusto qui nostrum neque
        maxime quidem beatae porro saepe pariatur in eius quibusdam eligendi rem
        dolorum? Non quod, pariatur et quam sunt voluptates, deserunt unde est,
        ducimus quas qui sint facere veritatis nemo iusto reiciendis!
        Necessitatibus adipisci non nihil beatae voluptas aperiam repellat nobis
        tempora eveniet architecto natus aut distinctio explicabo minus
        voluptates rem, quas iure ipsa accusamus perspiciatis esse, asperiores
        voluptatibus consequatur perferendis.
      </p>

      <div className="btn  ">
                  <Link to="/aboutus">
          <Button text="Explore more" />
        </Link>
        <br />
        {/* <Button text="" /> */}
      </div>
    </div>
  );
};

export default AboutUs;
