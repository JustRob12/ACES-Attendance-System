function replacePlaceholders(sql, params) {
    const keys = Object.keys(params);
    const values = [];
  
    keys.forEach((key) => {
      const regex = new RegExp(':' + key, 'g');
      sql = sql.replace(regex, '?');
      values.push(params[key]);
    });
  
    return { sql, values };
  }
  
export default replacePlaceholders;
  