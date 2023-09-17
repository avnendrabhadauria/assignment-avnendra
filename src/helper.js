export const getvalues = (data) => {
  let actual_timeCosumedinTask = 0;
  let totaltimeCosumed = 0;

  data.forEach((outerData) => {
    let all_innerTaskTime = outerData?.task?.reduce((innerTotal, innerData) => {
      return innerTotal + Number(innerData?.time);
    }, 0);
    actual_timeCosumedinTask += all_innerTaskTime;
    const currectTime =
      all_innerTaskTime > outerData?.mintimeOccupied
        ? all_innerTaskTime
        : outerData?.mintimeOccupied;
    totaltimeCosumed += currectTime;
  });
  return { actual_timeCosumedinTask, totaltimeCosumed };
};
