import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit, AfterViewInit  {

  constructor() { 

  }

  private classNormal = 'CARD_BORD COL_A CARD_SIZES';
  private classHover = 'CARD_BORD_HOVER COL_A_HOVER CARD_SIZES';

  private CARDS: Array<any> = [];
  private CARDS_B: Array<any> = [];
  private CARDS_RUN: number = 0;
  private CARDS_RUN_B: number = 0;

  private TimeAnimation: number = 120;//milliseconds
  private TimeAnimationR: number = 90;//milliseconds
  private WaitRevert: number = 3000; //milliseconds

  private AnimStatus: boolean = false;
  private AnimStatus_M: boolean = false;

  @ViewChild('CARD_1') myCard_1: ElementRef;
  @ViewChild('CARD_2') myCard_2: ElementRef;
  @ViewChild('CARD_3') myCard_3: ElementRef;
  @ViewChild('CARD_4') myCard_4: ElementRef;
  @ViewChild('CARD_5') myCard_5: ElementRef;
  @ViewChild('CARD_6') myCard_6: ElementRef;
  @ViewChild('CARD_7') myCard_7: ElementRef;
  @ViewChild('CARD_8') myCard_8: ElementRef;
  @ViewChild('CARD_9') myCard_9: ElementRef;
  @ViewChild('CARD_10') myCard_10: ElementRef;

  @ViewChild('CARD_1B') myCard_1B: ElementRef;
  @ViewChild('CARD_2B') myCard_2B: ElementRef;
  @ViewChild('CARD_3B') myCard_3B: ElementRef;
  @ViewChild('CARD_4B') myCard_4B: ElementRef;
  @ViewChild('CARD_5B') myCard_5B: ElementRef;
  @ViewChild('CARD_6B') myCard_6B: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void 
  {

    this.CARDS[0] = this.myCard_1.nativeElement;
    this.CARDS[1] = this.myCard_2.nativeElement;
    this.CARDS[2] = this.myCard_3.nativeElement;
    this.CARDS[3] = this.myCard_4.nativeElement;
    this.CARDS[4] = this.myCard_5.nativeElement;
    this.CARDS[5] = this.myCard_6.nativeElement;
    this.CARDS[6] = this.myCard_7.nativeElement;
    this.CARDS[7] = this.myCard_8.nativeElement;
    this.CARDS[8] = this.myCard_9.nativeElement;
    this.CARDS[9] = this.myCard_10.nativeElement;

    this.CARDS_B[0] = this.myCard_1B.nativeElement;
    this.CARDS_B[1] = this.myCard_2B.nativeElement;
    this.CARDS_B[2] = this.myCard_3B.nativeElement;
    this.CARDS_B[3] = this.myCard_4B.nativeElement;
    this.CARDS_B[4] = this.myCard_5B.nativeElement;
    this.CARDS_B[5] = this.myCard_6B.nativeElement;

  }

  public RUN_ANIM()
  {
    if (!this.AnimStatus)
    {
      this.AnimStatus = true;
      let group = this.CARDS;
      this.ANIM_INIT(group[this.CARDS_RUN], group);
    }

    if (!this.AnimStatus_M)
    {
      this.AnimStatus_M = true;
      let group = this.CARDS_B;
      this.ANIM_INIT_M(group[this.CARDS_RUN_B], group);
    }
  }

  public ANIM_INIT(element:any, group:Array<any>)
  {
    element.className = this.classHover;

      setTimeout(()=>{
        if (this.CARDS_RUN < group.length-1)
        {
          this.CARDS_RUN++;
          this.ANIM_INIT(group[this.CARDS_RUN], group);
        }
        else
        {

          setTimeout(()=>{

            this.CARDS_RUN = 0;
            this.ANIM_REVERT(group[this.CARDS_RUN], group);

          }, this.WaitRevert);

        }
      }, this.TimeAnimation);
  }


  public ANIM_REVERT(element:any, group:Array<any>)
  {
    element.className = this.classNormal;

      setTimeout(()=>{
        if (this.CARDS_RUN < group.length-1)
        {
          this.CARDS_RUN++;
          this.ANIM_REVERT(group[this.CARDS_RUN], group);
        }
        else
        {
          this.AnimStatus = false;
          this.CARDS_RUN = 0;
        }
      }, this.TimeAnimationR);
  }

  /**/
  public ANIM_INIT_M(element:any, group:Array<any>)
  {
    element.className = this.classHover;

      setTimeout(()=>{
        if (this.CARDS_RUN_B < group.length-1)
        {
          this.CARDS_RUN_B++;
          this.ANIM_INIT_M(group[this.CARDS_RUN_B], group);
        }
        else
        {

          setTimeout(()=>{

            this.CARDS_RUN_B = 0;
            this.ANIM_REVERT_M(group[this.CARDS_RUN_B], group);

          }, this.WaitRevert);

        }
      }, this.TimeAnimation*1.5);
  }

  public ANIM_REVERT_M(element:any, group:Array<any>)
  {
    element.className = this.classNormal;

      setTimeout(()=>{
        if (this.CARDS_RUN_B < group.length-1)
        {
          this.CARDS_RUN_B++;
          this.ANIM_REVERT_M(group[this.CARDS_RUN_B], group);
        }
        else
        {
          this.AnimStatus_M = false;
          this.CARDS_RUN_B = 0;
        }
      }, this.TimeAnimationR*1.5);
  }

}