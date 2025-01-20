import request from '@/utils/request';

export function marketSizeService(sub_id) {
  return request({
    url: 'subsystem/marketSize/list',
    method: 'get',
    params: { belongSubSystem: sub_id }
  });
}

export function marketEchelonService(sub_id, echelon) {
  return request({
    url: '/subsystem/marketEchelon/list',
    method: 'get',
    params: { belongSubSystem: sub_id, echelon: echelon }
  });
}

export function marketShareService(sub_id) {
  return request({
    url: '/subsystem/marketShare/list',
    method: 'get',
    params: { belongSubSystem: sub_id }
  });
}

export function competitive(sub_id) {
  return request({
    url: '/subsystem/competitive/list',
    method: 'get',
    params: { belongSubSystem: sub_id }
  });
}

export function marketSupplyService(sub_id) {
  return request({
    url: '/subsystem/marketSupply/list',
    method: 'get',
    params: { belongSubSystem: sub_id }
  });
}
