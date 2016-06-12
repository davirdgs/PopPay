//
//  DecisionVC.swift
//  MasterCardHack
//
//  Created by Davi Rodrigues on 11/06/16.
//  Copyright © 2016 Davi Rodrigues. All rights reserved.
//

import UIKit

class DecisionVC: UIViewController {
    
    @IBOutlet weak var payButton: UIButton!
    
    @IBOutlet weak var gerateButton: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    @IBAction func payButtonHandler(sender: AnyObject) {
        self.performSegueWithIdentifier("paySegue", sender: self)
    }
    
    @IBAction func gerateButtonHandler(sender: AnyObject) {
        self.performSegueWithIdentifier("gerateSegue", sender: self)
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
