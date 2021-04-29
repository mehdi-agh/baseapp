// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../../api';
import { ieoFields } from '../../../constants';
import {
    FetchIEOItem,
    ieoItemData,
    ieoItemError,
} from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'applogic',
    withHeaders: false,
};

export function* ieoItemSaga(action: FetchIEOItem) {
    try {
        const data = yield call(API.get(requestOptions), `/public/ieo/sales/${action.payload}`);

        if (ieoFields.metadata) {
            try {
                const details = yield call(
                    API.get(requestOptions),
                    `/public/metadata/search?key=IEO-${data.currency_id}-${data.id}`,
                );
                yield put(ieoItemData({ ...data, metadata: details.value }));
            } catch (error) {
                yield put(ieoItemData(data));
            }

        } else {
            yield put(ieoItemData(data));
        }
    } catch (error) {
        yield put(ieoItemError(error));
    }
}