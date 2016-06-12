//
//  QRCreateVC.swift
//  MasterCardHack
//
//  Created by Davi Rodrigues on 11/06/16.
//  Copyright © 2016 Davi Rodrigues. All rights reserved.
//

import UIKit
import SwiftQRCode



class QRCreateVC: UIViewController, UITextFieldDelegate {

    @IBOutlet weak var QRView: UIImageView!
    
    @IBOutlet weak var createButton: UIButton!
    
    @IBOutlet weak var textField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    
    @IBAction func buttonHandler(sender: AnyObject) {
        QRView.image = QRCode.generateImage(textField.text!, avatarImage: UIImage(named: "avatar"), avatarScale: 0.3)
    }
   

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func textFieldShouldReturn(textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
}
