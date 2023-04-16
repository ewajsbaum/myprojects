using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TicTacToe
{
    public partial class Form1 : Form
    {
        int size = 3;
        static Label[,] labels;
        Button winlbl = new Button();
        public Form1()
        {
            InitializeComponent();
        }

        private void OnFormLoad(object sender, EventArgs e)
        {
            tableLayoutPanel1.ColumnCount = size;
            tableLayoutPanel1.RowCount = size;
            tableLayoutPanel1.ColumnStyles.Clear();
            tableLayoutPanel1.RowStyles.Clear(); tableLayoutPanel2.ColumnCount = 1;
            tableLayoutPanel2.RowCount = size;
            tableLayoutPanel2.ColumnStyles.Clear();
            tableLayoutPanel2.RowStyles.Clear();
            tableLayoutPanel2.Size = new Size(100, Height);
            tableLayoutPanel2.Dock = DockStyle.Left;
            for (int i = 0; i < size; i++)
            {
                tableLayoutPanel1.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 1));
                tableLayoutPanel1.RowStyles.Add(new RowStyle(SizeType.Percent, 1));
                tableLayoutPanel2.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 1));
                tableLayoutPanel2.RowStyles.Add(new RowStyle(SizeType.Percent, 1));
            }
            labels = new Label[size, size];
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    Label lbl = new Label();
                    lbl.Dock = DockStyle.Fill;
                    lbl.BorderStyle = BorderStyle.FixedSingle;
                    tableLayoutPanel1.Controls.Add(lbl, i, j);
                    labels[i, j] = lbl;
                    lbl.MouseClick += mouseClickListener;
                }
            }
            winlbl.Size = new Size(100, 75);
            tableLayoutPanel2.Controls.Add(winlbl, 0, 0);
            winlbl.Text = "Finish Turn";
            winlbl.MouseClick += clickFinishTurn;
            Button reset = new Button();
            reset.Size = new Size(100, 75);
            tableLayoutPanel2.Controls.Add(reset, 0, 1);
            reset.Text = "Reset";
            reset.BackColor = Color.Red;
            reset.TextAlign = ContentAlignment.MiddleCenter;
            reset.MouseClick += clickReset;
            Button quit = new Button();
            quit.Size = new Size(100, 75);
            tableLayoutPanel2.Controls.Add(quit, 0, 2);
            quit.Text = "Quit";
            quit.BackColor = Color.Blue;
            quit.TextAlign = ContentAlignment.MiddleCenter;
            quit.MouseClick += quitGame;
        }
        private void mouseClickListener(object sender, EventArgs e)
        {
            Label label = (Label)sender;
            if (label.Text == "X")
            {
                label.Text = "O";
            }
            else
            {
                label.Text = "X";
                label.TextAlign = ContentAlignment.MiddleCenter;
            }
        }
        private void clickFinishTurn (object sender, EventArgs e)
        {
            checkForRow();
            checkForCol();
        }
        private void checkForRow()
        {
            if (labels[0, 0].Text == "X" && labels[0, 1].Text == "X" && labels[0, 2].Text == "X")
            {
                foundWinner();
            }
            else if (labels[1, 0].Text == "X" && labels[1, 1].Text == "X" && labels[1, 2].Text == "X")
            {
                foundWinner();
            }
            else if (labels[2, 0].Text == "X" && labels[2, 1].Text == "X" && labels[2, 2].Text == "X")
            {
                foundWinner();
            }

            else if (labels[0, 0].Text == "O" && labels[0, 1].Text == "O" && labels[0, 2].Text == "O")
            {
                foundWinner();
            }
            else if (labels[1, 0].Text == "O" && labels[1, 1].Text == "O" && labels[1, 2].Text == "O")
            {
                foundWinner();
            }
            else if (labels[2, 0].Text == "O" && labels[2, 1].Text == "O" && labels[2, 2].Text == "O")
            {
                foundWinner();
            }
        }

        private void checkForCol()
        {
            if(labels[0, 0].Text == "X" && labels[1, 0].Text == "X" && labels[2, 0].Text == "X")
            {
                foundWinner();
            }
            if (labels[0, 1].Text == "X" && labels[1, 1].Text == "X" && labels[2, 1].Text == "X")
            {
                foundWinner();
            }
            if (labels[0, 2].Text == "X" && labels[1, 2].Text == "X" && labels[2, 2].Text == "X")
            {
                foundWinner();
            }
            if (labels[0, 0].Text == "O" && labels[1, 0].Text == "O" && labels[2, 0].Text == "OX")
            {
                foundWinner();
            }
            if (labels[0, 1].Text == "O" && labels[1, 1].Text == "O" && labels[2, 1].Text == "O")
            {
                foundWinner();
            }
            if (labels[0, 2].Text == "O" && labels[1, 2].Text == "O" && labels[2, 2].Text == "O")
            {
                foundWinner();
            }
        }
        private void foundWinner()
        {
            winlbl.Text = "Win!";
            winlbl.TextAlign = ContentAlignment.MiddleCenter;
            winlbl.BackColor = Color.Yellow;
        }

        private void clickReset(object sender, EventArgs e)
        {
            foreach (Label item in labels)
            {
                item.Text = "";
                winlbl.Text = "Finish Turn";
                winlbl.BackColor = Color.White;
            }
        }
        private void quitGame(object sender, EventArgs e)
        {
            System.Windows.Forms.Application.ExitThread();
        }


    }
}
