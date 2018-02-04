import { API_PATH, STATUS_100, STATUS_200, STATUS_300, STATUS_400, STATUS_500 } from './httpstatus.js';

const parseStatus = ({code, name}) => ({
	description: `${code} ${name}`,
	externalURL: API_PATH + code
});

const parseCategory = ({name, codes}) => ({
	name,
	entries: codes.map(parseStatus)
});

const MOCK_DATA = [STATUS_100, STATUS_200, STATUS_300, STATUS_400, STATUS_500].map(parseCategory);

export default MOCK_DATA;
