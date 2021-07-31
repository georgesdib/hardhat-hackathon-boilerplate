import React from "react";

interface Params {
  txHash: string;
}

export function WaitingForTransactionMessage({ txHash }: Params) {
  return (
    <div className="alert alert-info" role="alert">
      Waiting for transaction <strong>{txHash}</strong> to be mined
    </div>
  );
}
