import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store/configureStore';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
