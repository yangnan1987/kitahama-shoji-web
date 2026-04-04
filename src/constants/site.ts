/** サイト全体で参照する表記（所在地・ドメイン等。変更時はここを更新） */
export const SITE = {
  nameJa: '北浜商事株式会社',
  nameEn: 'Kitahama Shoji Co., Ltd.',
  addressLines: ['〒542-0083', '大阪府大阪市中央区東心斎橋1-3-10-602'] as const,
  launched: '2026年1月',
  origin: 'https://kitahamashoji.com',
  /** 宅建業者表示の免許証番号（掲載は legal ページと一致させる） */
  takkenLicenseNo: '大阪府知事（１）第65455号',
} as const;
