var query = require('./mysqlConnect');

// var select_sql = "SELECT post_views_count FROM post_pv_count WHERE post_id = '5179054';";
// var select_sql = "SELECT post_id FROM post_pv_count WHERE post_views_count	> 100000;";
// var select_sql = "SELECT post_id FROM post_pv_count WHERE post_views_count	> 100000;";
// let insert_sql = `INSERT INTO wp_postmeta (meta_id,post_id,meta_key,meta_value) VALUES (` + (98000 + i) + `,` + articleIdArray[i] + `,"is_age_restriction",` + over18Array[i] + `)`
// let update_sql = `UPDATE wp_postmeta SET meta_value = ? WHERE post_id = ? AND meta_key = ?`;
// let data = [over18Array[i], articleIdArray[i], `is_age_restriction`]


test()
async function test ()
{
    const rows = await query('select count(*) from post_pv_count')
    console.log(rows)
}