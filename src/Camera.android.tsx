import React from 'react';
import _update from 'lodash/update';
import _cloneDeep from 'lodash/cloneDeep';
import { requireNativeComponent, findNodeHandle, NativeModules, processColor } from 'react-native';
import { CameraApi } from './types';

const { RNCameraKitModule } = NativeModules;
const NativeCamera = requireNativeComponent('CKCameraManager');

const Camera = React.forwardRef((props: any, ref) => {
  const nativeRef = React.useRef();

  React.useImperativeHandle<any, CameraApi>(ref, () => ({
    capture: async (options = {}) => {
      return await RNCameraKitModule.capture(options, findNodeHandle(nativeRef.current ?? null));
    },
    startCamera: () => {
      RNCameraKitModule.capture(findNodeHandle(nativeRef.current ?? null));
    },
    stopCamera: () => {
      RNCameraKitModule.capture(findNodeHandle(nativeRef.current ?? null));
    },
    requestDeviceCameraAuthorization: () => {
      throw new Error('Not implemented');
    },
    checkDeviceCameraAuthorizationStatus: () => {
      throw new Error('Not implemented');
    },
  }));

  const transformedProps = _cloneDeep(props);
  _update(transformedProps, 'cameraOptions.ratioOverlayColor', (c) => processColor(c));
  _update(transformedProps, 'frameColor', (c) => processColor(c));
  _update(transformedProps, 'laserColor', (c) => processColor(c));
  _update(transformedProps, 'surfaceColor', (c) => processColor(c));

  return (
    <NativeCamera
      style={{ minWidth: 100, minHeight: 100 }}
      flashMode={props.flashMode}
      ref={nativeRef}
      {...transformedProps}
    />
  );
});

export default Camera;
