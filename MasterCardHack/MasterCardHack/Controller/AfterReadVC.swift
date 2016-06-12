//
//  AfterReadVC.swift
//  MasterCardHack
//
//  Created by Davi Rodrigues on 12/06/16.
//  Copyright © 2016 Davi Rodrigues. All rights reserved.
//

import UIKit

class AfterReadVC: UIViewController, UIWebViewDelegate {
    
    var QRString = String()
    
    let htmlString: String = "http://104.236.75.92/pagpop/www/masterpass.html"//"<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>\n<script type='text/javascript' src='https://www.simplify.com/commerce/v1/simplify.js'></script><form id='simplify-payment-form'\naction='' method='POST'>\n<div>\n<label>Credit Card Number: </label>\n<input id='cc-number'\ntype='text' maxlength='20' autocomplete='off'\nvalue='' autofocus />\n</div>\n<div>\n<label>CVC: </label>\n<input id='cc-cvc' type='text' maxlength='4' autocomplete='off' value=''/>\n</div>\n<div>\n<label>Expiry Date: </label>\n<select id='cc-exp-month'>\n<option value='01'>Jan</option>\n<option value='02'>Feb</option>\n<option value='03'>Mar</option>\n<option value='04'>Apr</option>\n<option value='05'>May</option>\n<option value='06'>Jun</option>\n<option value='07'>Jul</option>\n<option value='08'>Aug</option>\n<option value='09'>Sep</option>\n<option value='10'>Oct</option>\n<option value='11'>Nov</option>\n<option value='12'>Dec</option>\n</select>\n<select id='cc-exp-year'>\n<option value='13'>2013</option>\n<option value='14'>2014</option>\n<option value='15'>2015</option>\n<option value='16'>2016</option>\n<option value='17'>2017</option>\n<option value='18'>2018</option>\n<option value='19'>2019</option>\n<option value='20'>2020</option>\n<option value='21'>2021</option>\n<option value='22'>2022</option>\n</select>\n</div>\n<button id='process-payment-btn' type='submit'>Process Payment</button>\n<div id='buy-with-masterpass-div'></div>\n</form><script>$(document).ready(function() {$('#simplify-payment-form').on('submit', function() {$('#process-payment-btn').attr('disabled', 'disabled');SimplifyCommerce.generateToken({key: 'YOUR_PUBLIC_KEY',card: {number: $('#cc-number').val(),cvc: $('#cc-cvc').val(),expMonth: $('#cc-exp-month').val(),expYear: $('#cc-exp-year').val()}}, simplifyResponseHandler);return false;});SimplifyCommerce.addMasterPassCheckoutButton('buy-with-masterpass-div', 'YOUR_PUBLIC_KEY',masterPassResponseHandler,masterPassCanceledHandler);});<script>"

    @IBOutlet weak var webView: UIWebView!

    //@IBOutlet weak var QRReadLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()

        //webView.loadHTMLString(self.htmlString, baseURL: nil)
        let url = NSURL (string: "http://104.236.75.92/pagpop/www/masterpass.html")
        let requestObj = NSURLRequest(URL: url!);
        webView.loadRequest(requestObj)
    }
    
    override func viewWillAppear(animated: Bool) {
        //QRReadLabel.text = QRString
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
