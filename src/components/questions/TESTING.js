export function addComma(){
    const data = "201004-705-02-002\n" +
        "201004-705-02-007\n" +
        "201004-705-02-010\n" +
        "201004-705-02-011\n" +
        "201004-705-03-001\n" +
        "201004-705-02-001\n" +
        "201004-705-02-003\n" +
        "201004-705-02-005\n" +
        "201004-705-02-012\n" +
        "201004-705-02-004\n" +
        "201004-705-02-006\n" +
        "201004-705-02-009\n" +
        "201004-705-02-008\n" +
        "201004-705-03-005\n" +
        "201004-705-03-006";
    const tempData = data.split('\n');
    let temp=[];
    tempData.map((i)=>{
        let notExists = false;
        tempData.map((j)=>{
            if(i === j){
                notExists = true;
            }
        });
        if(notExists){
            temp.push(i);
        }
    })
    let tReturn
    temp.map((t)=>{
        tReturn = tReturn+', '+t;
    })

    return tReturn;
}