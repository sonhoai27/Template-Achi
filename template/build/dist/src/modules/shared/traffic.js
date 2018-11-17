import axios from 'axios';
import { API } from '../../config/const';
export var addTraffic = function (form) {
    axios.post(API + 'thong-ke', {
        traffic_type: form.type,
        traffic_url: form.url
    });
};
//# sourceMappingURL=traffic.js.map