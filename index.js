// code your solution here
const record = []
superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
}
