var query = require('./mysqlConnect');
const fetch = require("node-fetch");
var schedule = require('node-schedule');
const moment = require('moment')


// var select_sql = "SELECT post_id FROM post_pv_count WHERE post_views_count	> 100000;";
// var select_sql = "SELECT post_id FROM post_pv_count WHERE post_views_count	> 100000;";
// let insert_sql = `INSERT INTO wp_postmeta (meta_id,post_id,meta_key,meta_value) VALUES (` + (98000 + i) + `,` + articleIdArray[i] + `,"is_age_restriction",` + over18Array[i] + `)`
// let update_sql = `UPDATE wp_postmeta SET meta_value = ? WHERE post_id = ? AND meta_key = ?`;
// let data = [over18Array[i], articleIdArray[i], `is_age_restriction`]
    //delete
    // const rows = await query('delete from post_pv_count where count_time="2021-02-02T00:00:00"')
    // const rows = await query('delete from post_pv_count where post_id="90962"')
    // deleteDataFromMysql()
    async function deleteDataFromMysql(){
        // const rows = await query('delete from post_pv_count where count_time="2021-02-9T00:00:00"')
        // console.log("del")
    // const rows = await query('select * from post_pv_count where (post_id = "5185602")')
    // const rows = await query('select * from post_pv_count where count_time="2021-02-08"')
    const rows = await query('delete from post_info"')
        console.log(rows)
    }
test()
async function test ()
{
    let b = '5189344'
    let a = "AND (post_id = 5184807)"
    a = ''
    // const rows = await query('select * from post_pv_count where ' + a + ' limit 100')
    // const rows = await query("SELECT * FROM `post_info` INNER JOIN `post_pv_count` ON `post_info`.`post_id` = `post_pv_count`.`post_id` AND `post_info`.`post_id` = '5153785'")
    // const rows = await query('select * from post_pv_count where post_id =' + b)
    // const rows = await query('select * from post_pv_count where count_time="2021-02-01"')
    // const rows = await query("select * from post_pv_count where post_id IN " + [5202270,5044483])
    // const rows = await query('select * from post_pv_count where (count_time between "2021-02-16" and "2021-02-16")' + a)
    // const rows = await query('select * from post_pv_count where (post_id = "5184807") and (count_time between "2021-02-16" and "2021-02-16")')

    // let date = ["2021-02-08","2021-02-08"]
    let arr = ['5202270','5048211']
    var getDataSql = "select * from post_pv_count where post_id = '5202270'";
    let date = [arr]
    // let getDataSql = 'select * from post_pv_count where count_time between ? and ?'

    const rows = await query(getDataSql,date)
    console.log(rows)
    const row = JSON.stringify(rows);
    console.log(row)
    console.log(Object.values(rows))
    for(let a in row)
    {
        // console.log(a)
    }
    // const rows = await query('select post_id from post_pv_count limit 1000,100')
    // let postIdArray = []
    // for(var i=0; i<rows.length; i++)
    // {
    //     postIdArray.push(rows[i].post_id)
    //     console.log(postIdArray.toString())
    //     let wwwPostInfoResponse = await fetch('http://uat.nownews.com/nn-client/api/v1/client/getPostAuthorInfo/' + rows[i].post_id , {
    //         method: 'POST',
    //         headers: { 'Authorization': '3ed6da83638c00b086b5d8d4f91cfa552748ae9f2f9bdffa5e53b43aa04a5410' },
    //     })
    //     let wwwPostInfo = await wwwPostInfoResponse.json()
    //     console.log(wwwPostInfo)
    //     console.log(wwwPostInfo.code)
    // }
    // console.log(wwwPostInfo.data[0].post_id)
    // console.log(wwwPostInfo.data[0].post_author)
    // pv = 0
    // console.log(rows[0].post_views_count)
    // for(var i=0; i<rows.length; i++)
    // {
    //     pv = pv + parseInt( rows[i].post_views_count)
    // }
    // console.log(pv)
    // console.log(rows.length)
}