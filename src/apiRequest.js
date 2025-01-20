const apiRequest = async(url='',mode='',errMsg='') =>
{
    try
    {
        const responses = await fetch(url,mode)
        if(!responses.ok) throw Error('Please reload the page...')
    }
    catch(err)
    {
        errMsg = err.message
    }
    finally 
    {
        return errMsg
    }

}

export default apiRequest