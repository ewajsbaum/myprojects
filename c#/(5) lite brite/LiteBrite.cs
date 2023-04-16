using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LiteBrite
{
    public partial class Board : Form
    {
        Label label;
        public Board()
        {
            InitializeComponent();

            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    label = new Label();
                    tableLayoutPanel1.Controls.Add(label, i, j);
                    label.Text = "";
                    label.BackColor = Color.White;
                    label.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom)
                    | System.Windows.Forms.AnchorStyles.Left)
                    | System.Windows.Forms.AnchorStyles.Right)));
                    label.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
                    label.MouseClick += new System.Windows.Forms.MouseEventHandler(mouseClicked);
                }
            }
        }

        private void tableLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {
        }

        private void mouseClicked(object sender, MouseEventArgs e)
        {
            if (((Label)sender).BackColor == Color.White)
            {
                ((Label)sender).BackColor = Color.Red;
            }
            else if (((Label)sender).BackColor == Color.Red)
            {
                ((Label)sender).BackColor = Color.Blue;
            }
            else if (((Label)sender).BackColor == Color.Blue)
            {
                ((Label)sender).BackColor = Color.LimeGreen;
            }
            else if (((Label)sender).BackColor == Color.LimeGreen)
            {
                ((Label)sender).BackColor = Color.Yellow;
            }
            else if (((Label)sender).BackColor == Color.Yellow)
            {
                ((Label)sender).BackColor = Color.White;
            }
        }
    }
}
