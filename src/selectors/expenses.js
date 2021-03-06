import moment from 'moment';
// Get visible expenses


export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((exp) => {
    const createdMoment = moment(exp.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day'):true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day'):true ;
    const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
