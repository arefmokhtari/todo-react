// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useContext } from 'react';
import Confirm from '../contexts/confirm-context';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const useConfirm = () => {
    const confirm = useContext(Confirm);

    const run = (onClick = () => {}) => {
        confirm.start();
        confirm.setClick({
            onClick,
            onClose: () => confirm.close(),
        })
    }

    return {
        ...confirm,
        run
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //