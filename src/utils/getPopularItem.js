const getPopularItem = async () => {
  const res = await fetch(
    "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10",
    {
      cache: "no-store",
    }
  );

  return res.json();
};

export default getPopularItem;
