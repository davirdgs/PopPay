//
//  QRReadVC.swift
//  MasterCardHack
//
//  Created by Davi Rodrigues on 11/06/16.
//  Copyright © 2016 Davi Rodrigues. All rights reserved.
//

import UIKit
import SwiftQRCode
import PassKit

class QRReadVC: UIViewController{//,SIMChargeCardViewControllerDelegate {

    let scanner = QRCode()
    var QRRead = String()
    //var chargeController = SIMChargeCardViewController()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        scanner.prepareScan(view) { (stringValue) -> () in
            print(stringValue)
            self.QRRead = stringValue
            self.performSegueWithIdentifier("confirmar", sender: self)
            
            /*
            let mposButton = PKPaymentSummaryItem(label: "mPos", amount: 0.5)
            let paymentRequest = PKPaymentRequest()
            paymentRequest.supportedNetworks = [ PKPaymentNetworkMasterCard]
            paymentRequest.countryCode = "BR"
            paymentRequest.currencyCode = "BRL"
            
            //MARK: TODO
            paymentRequest.merchantIdentifier = ""//QRCode
            
            paymentRequest.merchantCapabilities = PKMerchantCapability.Capability3DS
            
            paymentRequest.paymentSummaryItems = [mposButton]
            paymentRequest.requiredBillingAddressFields = PKAddressField.PostalAddress
            paymentRequest.requiredShippingAddressFields = PKAddressField.PostalAddress
            
            //MARK: TODO
            let chargeController = SIMChargeCardViewController(publicKey: "lvpb_<#INSERT_YOUR_PUBLIC_KEY_HERE#>", paymentRequest: paymentRequest, primaryColor: UIColor(red: 122, green: 122, blue: 122, alpha: 1))
            chargeController.delegate = self
            chargeController.amount = mposButton.amount
            chargeController.isCVCRequired = false
            chargeController.isZipRequired = true
            
            self.chargeController = chargeController
            
            self.presentViewController(self.chargeController, animated: true, completion: nil)
            
            */
            
        }
        scanner.scanFrame = view.bounds
        
    }
    
    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        
        // start scan
        scanner.startScan()
    }
    
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if(segue.identifier == "afterRead") {
            let vc = segue.destinationViewController as! AfterReadVC
            vc.QRString = QRRead
        }
    }
    /*
    //MARK: SIMChargeViewController Protocol
    func chargeCardCancelled() {
        self.chargeController.dismissViewControllerAnimated(true, completion: nil)
    }
    
    func creditCardTokenFailedWithError(error: NSError!) {
        
    }
    
    func creditCardTokenProcessed(token: SIMCreditCardToken!) {
        
        let url = NSURL(string: "<#INSERT_YOUR_SIMPLIFY_SERVER_HERE#>")
        
        //var waitingView = SIMWaitingView
        
        /*
         
         NSURL *url= [NSURL URLWithString:@"<#INSERT_YOUR_SIMPLIFY_SERVER_HERE#>"];
         
         SIMWaitingView *waitingView = [[SIMWaitingView alloc] initWithFrame:self.view.frame];
         [self.view addSubview:waitingView];
         
         NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url cachePolicy:NSURLRequestUseProtocolCachePolicy timeoutInterval:10.0];
         [request setHTTPMethod:@"POST"];
         
         NSString *postString = [NSString stringWithFormat:@"simplifyToken=%@&amount=50", token.token];
         [request setHTTPBody:[postString dataUsingEncoding:NSUTF8StringEncoding]];
         
         NSURLSession *session = [NSURLSession sessionWithConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
         NSURLSessionDataTask *paymentTask = [session dataTaskWithRequest:request completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
         
         [waitingView removeFromSuperview];
         
         NSString *responseData = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
         BOOL isResponseApproved = [responseData containsString:@"APPROVED"];
         NSLog(@"response:%@", responseData);
         
         if (error || !isResponseApproved) {
         
         NSLog(@"error:%@", error);
         SIMResponseViewController *viewController = [[SIMResponseViewController alloc] initWithBackground:nil primaryColor:self.primaryColor title:@"Failure." description:@"There was a problem with the payment.\nPlease try again."];
         viewController.isPaymentSuccessful = NO;
         [self presentViewController:viewController animated:YES completion:nil];
         
         } else {
         
         SIMResponseViewController *viewController = [[SIMResponseViewController alloc] initWithBackground:nil primaryColor:self.primaryColor title:@"Success!" description:@"You purchased a pack of buttons!"];
         viewController.isPaymentSuccessful = YES;
         [self presentViewController:viewController animated:YES completion:nil];
         }
         }];
         
         [paymentTask resume];
         
         */
        
    }
    */
 

}
