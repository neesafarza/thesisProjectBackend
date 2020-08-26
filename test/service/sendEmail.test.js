require("dotenv").config();

const sendEmail = require("../../services/sendEmail");

describe("Send Email Test Cases", () => {
  it("Test", () => {
    const product = {
      user_id: 1,
      category_id: 1,
      title: "Drop Leaf Expandable Table",
      description:
        "Perfect for small spaces! It doubles in width when its two side leaves are extended so that you can seat two on a normal day and make room for six when company calls. I’ve built it from a durable steel frame and added a solid mango wood top.",
      images: "https://res.cloudinary.com/furniss/image/upload/v1598276200/box-frame-drop-leaf-expandable-table-z_zwxycq.jpg",
      location: "London",
      price: 499,
      quantity: 1,
      material: "wood",
      height: 76,
      depth: 81,
      width: 60,
      createdAt: "2020-08-15",
      updatedAt: "2020-08-15",
    };

    return sendEmail.sendEmailToBuyer('fakemail@mail.com', product);
  });
});
