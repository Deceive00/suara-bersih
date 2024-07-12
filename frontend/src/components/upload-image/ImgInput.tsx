import blank from "@assets/image-placeholder.webp";
import { useState } from "react";

interface ImageInputProp {
  value: File[];
  onChange: (files: File[]) => void;
  defaultImages?: string[];
}

export function ImgInput({ value, onChange, defaultImages }: ImageInputProp) {
  const [imageUrls, setImageUrls] = useState<(string | ArrayBuffer)[]>(defaultImages || []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      const readers = files.map(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string | ArrayBuffer>((resolve) => {
          reader.onload = () => resolve(reader.result!);
        });
      });

      Promise.all(readers).then(results => {
        onChange(files);
        setImageUrls(results);
      });
    }
  };

  function handleDivClick() {
    document.getElementById("fileInput")?.click();
  }

  return (
    <div className={`px-0 w-full flex justify-center items-center h-full`} onClick={handleDivClick}>
      <div className="grid grid-cols-3 gap-2 w-full">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <img
              key={index}
              className="sm:rounded-md h-full object-center object-cover w-full"
              src={url as string}
              alt="Selected file"
            />
          ))
        ) : (
          <img className="sm:rounded-md h-full object-center object-cover w-full" src={blank} alt="Placeholder" />
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
}
