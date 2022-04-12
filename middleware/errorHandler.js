const getStatus = (err) => {
  return err.status ? err.status : 500;
};

const getContent = (err) => {
  const data = {};
  data.message = err.message;
  return data;
};

const errorHandler = (err, req, res, next) => {
  res.status(getStatus(err));
  res.json(getContent(err));
};

module.exports = errorHandler;
