import React, { useEffect } from 'react';
import useRenderIndicator from '../../hooks/useRenderIndicator';
import { RenderDisplayer } from '../../hooks/RenderDisplayer';
import { CustomButton } from '../../components/CustomButton';

interface MethodCallerProps {
  methodHandler: () => void;
}

export const MethodCaller = React.memo(
  ({ methodHandler }: MethodCallerProps) => {
    const showRerender = useRenderIndicator();

    useEffect(() => {
      console.log(
        'MethodCaller re-rendered. The methodHandler prop has changed'
      );
    }, [methodHandler]);

    return (
      <div className="border-2 border-green-500 p-4">
        {/* <RenderDisplayer showRerender={showRerender} /> */}

        <div className="mb-6">
          <div className="text-green-500">Method Caller</div>
          {/* <div className="text-purple-500">React.memo</div> */}
        </div>

        <CustomButton onClick={methodHandler} color="green">
          Call Method
        </CustomButton>
      </div>
    );
  }
);
