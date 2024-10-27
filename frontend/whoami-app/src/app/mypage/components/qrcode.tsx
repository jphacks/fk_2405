import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export const QrCodeGenerator = ({ text }: { text: string }) => {
  return (
    <div className="fixed top-80">
      <QRCodeCanvas
        value={text}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
      />
      <p>{text}</p>
    </div>
  );
};
