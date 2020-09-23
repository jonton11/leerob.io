import Unsplash, { toJson } from 'unsplash-js';

let unsplash;

export default async (_, res) => {
  if (!unsplash) {
    unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_KEY
    });
  }

  // TODO Unsplash
  const userStats = await unsplash.users.statistics('');
  const { downloads, views } = await toJson(userStats);

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total
  });
};
