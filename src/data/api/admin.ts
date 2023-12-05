// export async function fetchAdminMeAPI(
// 	adminId?: string
// ): Promise<ResponseResult<DataRingkasanAdmin>> {
// 	try {
// 		const res: ResponseResult<DataRingkasanAdmin> = await API<
// 			ResponseResult<DataRingkasanAdmin>
// 		>(
// 			adminId
// 				? `${APIUrl.ADMIN_DETAIL}/${adminId}`
// 				: `${APIUrl.ADMIN_DETAIL}`,
// 			'GET',
// 			{},
// 			getHeadersToken().headers
// 		);
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// }
