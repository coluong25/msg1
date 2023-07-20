"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="311075731275560" chatSupport>
      <CustomChat pageId="115672024927940" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
