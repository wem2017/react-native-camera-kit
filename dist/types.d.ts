export declare type CameraApi = {
    capture: (option: any) => Promise<any>;
    stopCamera: () => void;
    startCamera: () => void;
    readImageQRCode: (base64: string) => void;
    requestDeviceCameraAuthorization: () => Promise<boolean>;
    checkDeviceCameraAuthorizationStatus: () => Promise<boolean>;
};
