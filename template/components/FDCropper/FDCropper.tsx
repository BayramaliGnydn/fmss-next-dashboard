"use client";
import React, { createRef, useEffect, useState } from "react";
import { Card } from "@nextui-org/card";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import ReactCropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import FDBox from "@/template/components/FDBox/FDBox";
import { AddIcon } from "@/components/shared/UI/icons";
import FDButton from "@/template/components/FDButton/FDButton";

interface ImageCropperProps {
  open: boolean;
  onClose: (arg?: string) => void;
  defaultImage?: string;
  aspectRatio?: number;
}

const Cropper = ({
  open,
  onClose,
  defaultImage,
  aspectRatio,
}: ImageCropperProps) => {
  const [image, setImage] = useState(defaultImage);

  const cropperRef = createRef<ReactCropperElement>();
  const onChange = (e: any) => {
    e.preventDefault();
    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  useEffect(() => {
    setImage(defaultImage);
  }, [defaultImage]);

  const handleClose = (type: "Cancel" | "Save") => {
    if (type === "Cancel") {
      setImage(defaultImage ?? undefined);
      onClose();
    } else {
      const cropper = cropperRef.current?.cropper;

      onClose(cropper?.getCroppedCanvas().toDataURL("image/jpeg"));
    }
  };

  return (
    <Modal
      isOpen={open}
      scrollBehavior="outside"
      size="5xl"
      onClose={() => handleClose("Cancel")}
    >
      <ModalContent className="sm:w-[700px] w-[900px] p-4">
        <FDBox className="flex-col gap-4">
          <h2 className="text-center text-2xl font-bold">Crop Image</h2>
          <FDBox className="flex-col gap-4 items-center">
            {!image && (
              <FDBox>
                {
                  // eslint-disable-next-line jsx-a11y/label-has-associated-control
                  <label className="flex justify-center" htmlFor="upload">
                    <Card className="h-[200px] w-[200px] justify-center items-center cursor-pointer">
                      <FDBox className="flex-col gap-4 items-center">
                        <AddIcon color="primary" size={48} />
                        <p>Upload Image</p>
                      </FDBox>
                    </Card>
                  </label>
                }
              </FDBox>
            )}
            <Input
              accept="image/*"
              className="hidden"
              id="upload"
              type="file"
              onChange={onChange}
            />
            <ModalBody className="items-center gap-4">
              {!!image && (
                <FDBox className="flex-col gap-2">
                  <ReactCropper
                    ref={cropperRef}
                    aspectRatio={aspectRatio ?? 1}
                    autoCropArea={1} // Kırpma alanını maksimum yapar
                    background={false} // Arkaplanı kaldır
                    checkOrientation={false}
                    guides={false}
                    preview=".img-preview"
                    responsive={true}
                    scalable={false} // Zoom ile resim ölçeklenmesini engeller
                    src={image}
                    style={{ height: "300px" }}
                    viewMode={1}
                    zoomable={false} // Zoom özelliğini devre dışı bırakır
                  />
                  {
                    // eslint-disable-next-linejsx-a11y/label-has-associated-control
                    <label
                      className="flex justify-center cursor-pointer"
                      htmlFor="upload"
                    >
                      <Card className="p-3">Change Image</Card>
                    </label>
                  }
                </FDBox>
              )}

              {!!image && (
                <FDBox className="flex-col">
                  <p className="text-center">Preview Image</p>
                  <FDBox className="justify-center">
                    <div
                      className="img-preview"
                      style={{
                        width: "300px", // Önizleme alanı genişliği
                        height: "300px", // Önizleme alanı yüksekliği
                        overflow: "hidden",
                        marginTop: "20px",
                        border: "1px solid black",
                        display: "block", // Blok olarak göster
                        backgroundColor: "#f7f7f7", // Arkaplan rengi
                      }}
                    />
                  </FDBox>
                </FDBox>
              )}
            </ModalBody>
            <ModalFooter>
              <FDBox className="gap-4 justify-center w-full">
                <FDButton
                  colorType="Btn-Danger"
                  onClick={() => handleClose("Cancel")}
                >
                  Cancel
                </FDButton>
                <FDButton
                  colorType="Btn-Success"
                  onClick={() => handleClose("Save")}
                >
                  Save
                </FDButton>
              </FDBox>
            </ModalFooter>
          </FDBox>
        </FDBox>
      </ModalContent>
    </Modal>
  );
};

export default Cropper;
