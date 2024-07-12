
import { useEffect, useState } from "react";
import { FaImages } from "react-icons/fa";
interface ImageInputProp {
  value: File[];
  onChange: (files: File[]) => void;
  defaultImages?: any[];
}

export function ImgInput({ value, onChange, defaultImages }: ImageInputProp) {
  const [imageUrls, setImageUrls] = useState<(string | ArrayBuffer)[] | null>(defaultImages || null);
  useEffect(() => {
    if(defaultImages){
      const readers = defaultImages.map(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string | ArrayBuffer>((resolve) => {
          reader.onload = () => resolve(reader.result!);
        });
      });
  
      Promise.all(readers).then(results => {
        setImageUrls(results);
      });
    }
  }, []);
  
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
      
        {imageUrls && imageUrls.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 w-full p-10">
            {
              imageUrls.map((url, index) => (
                <img
                  key={index}
                  className="sm:rounded-md h-48 object-center object-cover w-full"
                  src={url as string}
                  alt="Selected file"
                />
              ))
            }
          </div>
        ) : (
          <div className="p-10 w-full border-secondary border-[0.1rem] bg-white rounded-md flex justify-center items-center flex-col">
            <FaImages className="w-48 h-48 text-gray-300"/>
            <p className="text-gray-400 font-normal">Drop your image here or <span className="text-RedPrimary font-bold"> browse</span></p>
          </div>
        )}

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
