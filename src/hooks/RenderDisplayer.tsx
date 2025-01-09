import React from 'react';

export const RenderDisplayer = ({
  showRerender,
}: {
  showRerender: boolean;
}) => {
  return (
    showRerender && <div className="absolute text-pink-600">Re-render</div>
  );
};
