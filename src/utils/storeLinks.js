import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getLinkSave(key){
    const myLinks = await AsyncStorage.getItem(key);
    let linkSaves = JSON.parse(myLinks)||[];
    return linkSaves;
}

export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);
    const hasLink = linksStored.some(link => link.id === newLink.id);
    if(hasLink){
        console.log('Este link já existe na lista!')
        return;
    }
    linksStored.push(newLink);
    await AsyncStorage.setItem(key,JSON.stringify(linksStored))
    console.log('Links salvo com sucesso!')
}

export async function deleteLink(links, id){
    let myLinks = links.filter((item)=>{
        return (item.id !== id)
    })
    await AsyncStorage.setItem('links',JSON.stringify(myLinks))
    return myLinks
}
