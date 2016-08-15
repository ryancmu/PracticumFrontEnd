/**
 * Created by zhangchuhui on 8/14/16.
 */
jQuery(function ($) {
    $("#exportButton").click(function () {
        // parse the HTML table element having an id=exportTable
        var dataSource = shield.DataSource.create({
            data: "#product_1_table",
            schema: {
                type: "table",
                fields: {
                    File_Name: { path:"File Name", type: String },
                    Infection_Types: { path:"Infection Types", type: Number },
                    Port: { path:"Port", type: Number },
                    User_Agent: { path: "User Agent", type: String }
                }
            }
        });

        // when parsing is done, export the data to PDF
        dataSource.read().then(function (data) {
            var pdf = new shield.exp.PDFDocument({
                author: "PrepBootstrap",
                created: new Date()
            });

            pdf.addPage("a4", "portrait");

            pdf.table(
                50,
                50,
                data,
                [
                    // { field: "Location", title: "Location", width: 80 },
                    { field: "File_Name", title: "File Name", width: 100 },
                    { field: "Infection_Types", title: "Infection Types", width: 100 },
                    { field: "Port", title: "Port", width: 50 },
                    { field: "User_Agent", title: "User Agent", width: 150 }
                ],
                {
                    margins: {
                        top: 50,
                        left: 50
                    }
                }
            );

            pdf.saveAs({
                fileName: "IP_detail"
            });
        });
    });
});



