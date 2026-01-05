import Button from "./Button";
  export default function Card(){
    return(
        <div className="big-white rounded-xl shadow-lg p-4">
          <img
          src="https://via.placeholder.com/300"
          className="rounded-lg mb-3 hover:scale-105 transition"/>


          <h3 className="text-lg font-semibold">Card Title</h3>
      <p className="text-gray-600 mb-3">
        This is a reusable card component.
      </p>
      <Button text="Read More" />

        </div>
    )
  }