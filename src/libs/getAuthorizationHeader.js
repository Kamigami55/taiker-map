import jsSHA from 'jssha'

import { NEXT_PUBLIC_TDX_APP_ID, NEXT_PUBLIC_TDX_APP_KEY } from '@/constants/envValues'

export default function getAuthorizationHeader() {
  let GMTString = new Date().toGMTString()
  let ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(NEXT_PUBLIC_TDX_APP_KEY, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization =
    'hmac username="' +
    NEXT_PUBLIC_TDX_APP_ID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
}
