export declare type CameraApi = {
    capture: () => Promise<{
        uri: string;
    }>;
    stopCamera: () => void;
    startCamera: () => void;
    requestDeviceCameraAuthorization: () => Promise<boolean>;
    checkDeviceCameraAuthorizationStatus: () => Promise<boolean>;
};
