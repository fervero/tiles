const API_PATH = "https://http.cat/";

const STATUS_100 = {
	name: "1xx Informational",
	codes: [
		{ code: 100, name: "Continue" },
		{ code: 101, name: "Switching Protocols" },
		// { code: 102, name: "Processing", }
	]
}

const STATUS_200 = {
	name: "2xx Success",
	codes: [
		{ code: 200, name: "OK" },
		{ code: 201, name: "Created" },
		{ code: 202, name: "Accepted" },
		// { code: 203, name: "Non-authoritative Information" },
		{ code: 204, name: "No Content" },
		// { code: 205, name: "Reset Content" },
		{ code: 206, name: "Partial Content" },
		{ code: 207, name: "Multi-Status" },
		// { code: 208, name: "Already Reported" },
		// { code: 226, name: "IM Used" },
	]
}

const STATUS_300 = {
	name: "3xx Redirection",
	codes: [
		{ code: 300, name: "Multiple Choices" },
		{ code: 301, name: "Moved Permanently" },
		{ code: 302, name: "Found" },
		{ code: 303, name: "See Other" },
		{ code: 304, name: "Not Modified" },
		{ code: 305, name: "Use Proxy" },
		{ code: 307, name: "Temporary Redirect" },
		// { code: 308, name: "Permanent Redirect" },
	]
}

const STATUS_400 = {
	name: "4xx Client Error",
	codes: [
		{ code: 400, name: "Bad Request" },
		{ code: 401, name: "Unauthorized" },
		{ code: 402, name: "Payment Required" },
		{ code: 403, name: "Forbidden" },
		{ code: 404, name: "Not Found" },
		{ code: 405, name: "Method Not Allowed" },
		{ code: 406, name: "Not Acceptable" },
		// { code: 407, name: "Proxy Authentication Required" },
		{ code: 408, name: "Request Timeout" },
		{ code: 409, name: "Conflict" },
		{ code: 410, name: "Gone" },
		{ code: 411, name: "Length Required" },
		{ code: 412, name: "Precondition Failed" },
		{ code: 413, name: "Payload Too Large" },
		{ code: 414, name: "Request-URI Too Long" },
		{ code: 415, name: "Unsupported Media Type" },
		{ code: 416, name: "Requested Range Not Satisfiable" },
		{ code: 417, name: "Expectation Failed" },
		{ code: 418, name: "I'm a teapot" },
		{ code: 421, name: "Misdirected Request" },
		{ code: 422, name: "Unprocessable Entity" },
		{ code: 423, name: "Locked" },
		{ code: 424, name: "Failed Dependency" },
		{ code: 426, name: "Upgrade Required" },
		// { code: 428, name: "Precondition Required" },
		{ code: 429, name: "Too Many Requests" },
		{ code: 431, name: "Request Header Fields Too Large" },
		{ code: 444, name: "Connection Closed Without Response" },
		{ code: 451, name: "Unavailable For Legal Reasons" },
		// { code: 499, name: "Client Closed Request" },
	]
}

const STATUS_500 = {
	name: "5xx Server Error",
	codes: [
		{ code: 500, name: "Internal Server Error" },
		// { code: 501, name: "Not Implemented" },
		{ code: 502, name: "Bad Gateway" },
		{ code: 503, name: "Service Unavailable" },
		{ code: 504, name: "Gateway Timeout" },
		// { code: 505, name: "HTTP Version Not Supported" },
		{ code: 506, name: "Variant Also Negotiates" },
		{ code: 507, name: "Insufficient Storage" },
		{ code: 508, name: "Loop Detected" },
		{ code: 510, name: "Not Extended" },
		{ code: 511, name: "Network Authentication Required" },
		{ code: 599, name: "Network Connect Timeout Error" },
	]
}

export { API_PATH, STATUS_100, STATUS_200, STATUS_300, STATUS_400, STATUS_500 }
