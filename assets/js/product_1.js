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
                    Location: { type: String },
                    File_Count: { type: Number },
                    Infection_Types: { type: String },
                    Port: { type: String },
                    User_Agent: { type: String }
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
                    { field: "Location", title: "Location", width: 80 },
                    { field: "File Count", title: "File Count", width: 100 },
                    { field: "Infection Types", title: "Infection Types", width: 100 },
                    { field: "Port", title: "Port", width: 50 },
                    { field: "User Agent", title: "User Agent", width: 150 }
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



