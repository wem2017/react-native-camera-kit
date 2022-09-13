export declare type CameraApi = {
    capture: () => Promise<{
        uri: string;
    }>;
    stopCamera: () => void;
    startCamera: () => void;
    readImageQRCode: (base64: string) => void;
    requestDeviceCameraAuthorization: () => Promise<boolean>;
    checkDeviceCameraAuthorizationStatus: () => Promise<boolean>;
};
