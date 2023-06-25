import React, { useState, useRef, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { SketchPicker } from "react-color";

export function WorkspaceColor({ values, onChange }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const colorPickerRef = useRef();

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setShowColorPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-1 w-48">
      <div>
        <Button
          onClick={toggleColorPicker}
          className="mt-2 mb-1 rounded-lg"
          style={{ backgroundColor: selectedColor }}
        ></Button>
        {showColorPicker && (
          <div ref={colorPickerRef}>
            <SketchPicker
              color={selectedColor}
              onChange={handleColorChange}
              className="absolute top-0 left-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkspaceColor;
