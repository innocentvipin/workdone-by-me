let fs=require("fs");
let path=require("path");
// taking input of path from user
let folderPath=process.argv[2];
let exists=fs.existsSync(folderPath);
// _________________________________________________________________________________
// making a class for extension names
let extension={
    
    audio:[".mp3"],
    video:[".mp4",".avi"],
    photos:[".gif",".jpeg","jpg"],
    document:[".pdf",".doc",".text",".xlsx"],
    Software:[".exe"],
}
// ____________________________________________________________________________________
// checking the folder exists or not
if(exists){
    // now we have to read our files
    let content=fs.readdirSync(folderPath);
    // now we have to find extension of our files 
    for(let i=0;i<content.length;i++){
    let ext=path.extname(content[i]);
    let nameOfFolder=giveFolderName(ext);
    let newfolder=path.join(folderPath,nameOfFolder);
    if(fs.existsSync(newfolder)){
     move(folderPath,newfolder,content[i]);
    }else{
        fs.mkdirSync(newfolder)
        move(folderPath,newfolder,content[i]);
    }
   


}}
else{
    console.log("give correct path of the folder");
}

function giveFolderName(ext){
    for(let key in extension ){
        let exti=extension[key]
        for(let i=0;i<exti.length;i++){
            if(exti[i]==ext){
                return key;
            }
        }

    }return " other";
}
function move(folderPath,newfolder,content){
    let src=path.join(folderPath,content);
    let desti=path.join(newfolder,content);
    fs.copyFileSync(src,desti);
    fs.unlinkSync(src);
}

