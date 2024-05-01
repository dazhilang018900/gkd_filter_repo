import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hykgl.Record',
  name: '东南小说',
  groups: [
    {
      key: 3,
      name: '页面覆盖广告',
      activityIds: [
        'com.csdy.yedw.ui.book.read.ReadBookActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout[childCount=1] > @ImageView[height < 100]',
          snapshotUrls: [
            'https://i.gkd.li/i/12892825',
          ],
        },
    }
  ],
});
